import React, { useState, useRef, useEffect } from "react";
import Client from "./Client";
import Editor from "./Editor";
import { initSocket } from "../Socket";
import { useNavigate, useLocation, useParams, Navigate } from "react-router-dom";
import toast from "react-hot-toast";

function EditorPage() {
    const [clients, setClients] = useState([]);
    const socketRef = useRef(null);
    const codeRef = useRef(null);
    const location = useLocation();
    const { roomId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const init = async () => {
            socketRef.current = await initSocket();

            const handleErrors = (e) => {
                console.log("socket error", e);
                toast.error("Socket connection failed, try again later.");
                navigate("/");
            };

            socketRef.current.on("connect_error", handleErrors);
            socketRef.current.on("connect_failed", handleErrors);

            socketRef.current.emit("join", {
                roomId,
                username: location.state?.username || "Unknown",
            });

            // ✅ "joined" — only handles join events
            socketRef.current.on("joined", ({ clients, username, socketId }) => {
                if (username !== location.state?.username) {
                    toast.success(`${username} joined the room.`);
                }
                setClients([...clients]);
                socketRef.current.emit("sync-code", {
                    code: codeRef.current,
                    socketId,
                });
            });

            // ✅ "disconnected" — now a sibling of "joined", not nested inside it
            socketRef.current.on("disconnected", ({ socketId, username }) => {
                toast.success(`${username} left the room.`);
                setClients((prev) => prev.filter((c) => c.socketId !== socketId));
            });
        };

        init();

        return () => {
            socketRef.current?.off("joined");
            socketRef.current?.off("disconnected");
            socketRef.current?.off("connect_error");
            socketRef.current?.off("connect_failed");
            socketRef.current?.disconnect();
        };
    }, []);

    if (!location.state) {
        return <Navigate to="/" />;
    }

    const copyRoomId = async () => {
        try {
            await navigator.clipboard.writeText(roomId);
            toast.success("Room ID copied to clipboard!");
        } catch {
            toast.error("Failed to copy Room ID.");
        }
    };

    const clearCode = () => {
      codeRef.current = "";
      socketRef.current.emit("clear-code", { roomId });  // was "code-change" with commented code
      toast.success("Code cleared!");
    };

    const leaveRoom = () => {
        navigate("/");
    };

    return (
        <div className="container-fluid vh-100">
            <div className="row h-100">
                <div
                    className="col-12 col-md-2 bg-dark h-100 text-light d-flex flex-column p-3"
                    style={{ boxShadow: "2px 0px 4px rgba(0,0,0,0.1)" }}
                >
                    <div className="d-flex justify-content-center align-items-center">
                        <img
                            src="/kolab.png"
                            className="img-fluid mx-auto d-block"
                            style={{ maxWidth: "150px", marginTop: "-40px" }}
                        />
                    </div>
                    <hr style={{ marginTop: "-1rem" }} />
                    <div className="d-flex flex-column overflow-auto">
                        {clients.map((client) => (
                            <Client key={client.socketId} username={client.username} />
                        ))}
                    </div>
                    <div className="mt-auto d-flex flex-column">
                        <hr />
                        <button onClick={copyRoomId} className="btn btn-success">
                            Copy Room Id
                        </button>
                        <button onClick={leaveRoom} className="btn btn-danger mt-2">
                            Leave Room
                        </button>
                        <button onClick={clearCode} className="btn btn-warning mt-2">
                            Clear Code
                        </button>
                    </div>
                </div>
                <div className="col-12 col-md-10 h-100 text-light d-flex flex-column">
                    <Editor
                        socketRef={socketRef}
                        roomId={roomId}
                        onCodeChange={(code) => (codeRef.current = code)}
                    />
                </div>
            </div>
        </div>
    );
}

export default EditorPage;
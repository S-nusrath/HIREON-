import { useEffect, useState } from "react";
import { getConnections } from "../services/connectionService";

export default function useConnections(userId) {
  const [connections, setConnections] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadConnections = async () => {
    if (!userId) return;

    try {
      setLoading(true);

      const data = await getConnections(userId);

      // ensure always an array
      if (Array.isArray(data)) {
        setConnections(data);
      } else {
        setConnections([]);
      }

    } catch (err) {
      console.error("Error loading connections:", err);
      setConnections([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadConnections();
  }, [userId]);

  return {
    connections,
    loading,
    reload: loadConnections
  };
}
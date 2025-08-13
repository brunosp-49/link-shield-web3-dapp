import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RedirectPage: React.FC = () => {
  const { shortId } = useParams<{ shortId: string }>();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      window.location.href = "https://example.com";
    }
  }, [countdown]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100"></div>
  );
};

export default RedirectPage;

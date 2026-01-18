import React, { useState } from "react";
import Button from "../Navbar/Button";
import { MailCheck } from "lucide-react";

const Input = () => {
  const [subscribeInput, setSubscribeInput] = useState("");

  const subscribe = () => {
    console.log(subscribeInput);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-6 max-w-md">
      <input
        type="email"
        placeholder="Enter your email"
        value={subscribeInput}
        onChange={(e) => setSubscribeInput(e.target.value)}
        className="flex-1 px-4 py-3 rounded-xl bg-gray-900 border border-teal-500/30
        text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
      />

      <Button
        name="Subscribe"
        icon={MailCheck}
        func={subscribe}
      />
    </div>
  );
};

export default Input;

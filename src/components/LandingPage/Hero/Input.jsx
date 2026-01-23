import React, { useState } from "react";
import Button from "../Navbar/Button";
import { MailCheck } from "lucide-react";
import { subscribeEmail } from "../../../api/subscribe/subscribe";
import Swal from "sweetalert2";

const Input = () => {
  const [subscribeInput, setSubscribeInput] = useState("");
  const [loading, setLoading] = useState(false);

  const showLoading = () => {
  Swal.fire({
    toast: true,
    position: "top",
    title: "Processing...",
    didOpen: () => {
      Swal.showLoading();
    },
    showConfirmButton: false,
    allowOutsideClick: false,
    allowEscapeKey: false,
    customClass: {
      popup: "swal-margin-top",
    },
  });
};


  const subscribe = async () => {
    if (!subscribeInput) {
      console.log("Empty input");
      Swal.fire({
        toast: true,
        position: "top",
        icon: "error",
        title: "Empty Input.",
        showConfirmButton: false,
        timer: 2000,
        customClass: {
          popup: "swal-margin-top",
        },
      });
      return;
    }

    try {
      setLoading(true);

      showLoading();

      const res = await subscribeEmail(subscribeInput);

      Swal.close();

      if (res.status === 200 || res.data?.success) {
        Swal.fire({
        toast: true,
        position: "top",
        icon: "success",
        title: `Subscribe Successfully To Your Email ${subscribeInput}.`,
        showConfirmButton: false,
        timer: 2000,
        customClass: {
          popup: "swal-margin-top",
        },
      })
        setSubscribeInput("");
      }
    } catch (err) {
      Swal.fire({
        toast: true,
        position: "top",
        icon: "error",
        title: `Error: ` + (err.response?.data?.message || err.message),
        showConfirmButton: false,
        timer: 2000,
        customClass: {
          popup: "swal-margin-top",
        },
      })
    } finally {
      setLoading(false);
    }
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
        name={loading ? "Subscribing..." : "Subscribe"}
        icon={MailCheck}
        func={subscribe}
        disabled={loading}
      />
    </div>
  );
};

export default Input;

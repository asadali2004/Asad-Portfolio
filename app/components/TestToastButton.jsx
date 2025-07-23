"use client";
import { toast } from "react-toastify";

export default function TestToastButton() {
  return (
    <button
      style={{position: 'fixed', bottom: 20, right: 20, zIndex: 99999}}
      onClick={() => toast.success('Test Toast!')}
    >
      Test Toast
    </button>
  );
}

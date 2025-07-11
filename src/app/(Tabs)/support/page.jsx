"use client";

import { useState } from "react";
import ticketsData from "./data/tickets.json";
import SupportSidebarSection from "./components/SupportSidebarSection";
import SupportChatWindow from "./components/SupportChatWindow";

export default function SupportPage() {
  const [tickets, setTickets] = useState(ticketsData);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSendMessage = (message) => {
    const updated = [...tickets];
    updated[activeIndex].messages.push(message);
    setTickets(updated);
  };

  const handleMarkResolved = () => {
    const updated = [...tickets];
    updated[activeIndex].status = "Resolved";
    setTickets(updated);
  };

  return (
    <div className="flex gap-4 p-4">
      <SupportSidebarSection
        tickets={tickets}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <SupportChatWindow
        ticket={tickets[activeIndex]}
        onSendMessage={handleSendMessage}
        onMarkResolved={handleMarkResolved}
      />
    </div>
  );
}

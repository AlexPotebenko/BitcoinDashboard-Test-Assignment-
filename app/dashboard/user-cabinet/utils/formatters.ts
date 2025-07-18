export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleString();
};

export const getStatusColor = (status: string) => {
  return status === "Success" ? "text-success" : "text-destructive";
};

export const getPlanColor = (plan: string) => {
  const colors = {
    Basic: "bg-plan-basic text-plan-basic-foreground",
    Premium: "bg-plan-premium text-plan-premium-foreground",
    VIP: "bg-plan-vip text-plan-vip-foreground",
  };
  return colors[plan as keyof typeof colors] || "bg-plan-basic text-plan-basic-foreground";
};

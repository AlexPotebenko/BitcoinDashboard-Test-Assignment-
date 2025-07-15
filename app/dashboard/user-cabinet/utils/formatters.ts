export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleString();
};

export const getStatusColor = (status: string) => {
  return status === "Success" ? "text-green-600" : "text-red-600";
};

export const getPlanColor = (plan: string) => {
  const colors = {
    Basic: "bg-gray-100 text-gray-700",
    Premium: "bg-green-100 text-green-700",
    VIP: "bg-purple-100 text-purple-700",
  };
  return colors[plan as keyof typeof colors] || "bg-gray-100 text-gray-700";
};

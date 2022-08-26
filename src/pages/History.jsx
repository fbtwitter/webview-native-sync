import { useEffect } from "react";
import { toast } from "react-toastify";

const History = () => {
  useEffect(() => {
    toast(`back native ${window.nativeBackPressed}`);
    toast(`back pressed ${window.onBackPressed}`);
  }, []);

  return <div>Halaman Baru</div>;
};

export default History;

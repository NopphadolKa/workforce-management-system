import { Plus, X } from "lucide-react";

const Header = ({ adding, setAdding }) => {
  console.log(adding);
  return (
    <div
      className="
    p-4 bg-white shadow-md border-b border-gray-200"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-800">
          ระบบจัดการเวรประจำจุด
        </h2>
        {/* แค่สลับ T/F ไม่ต้องสร้าง Fc ก็ได้ , prev ป้องกันกันได้สถานะเดิม*/}
        <button
          onClick={() => setAdding((prev) => !prev)}
          className={`flex items-center gap-2 p-2 rounded-md
            ${
              adding
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-green-500 text-white hover:bg-green-600"
            }
            `}
        >
          {adding ? (
            <>
              <X size={20} />
              ยกเลิก{" "}
            </>
          ) : (
            <>
              <Plus size={20} />
              เพิ่มจุดเวร{" "}
            </>
          )}
        </button>
      </div>
      {adding && (
        <div className=" mt-2 text-amber-600 text-sm bg-amber-100 p-3 rounded-lg border">
          คลิกบนแผนที่เพื่อเพิ่มจุดเวร
        </div>
      )}
    </div>
  );
};
export default Header;

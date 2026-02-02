import React from "react";
import { ShieldCheck } from "lucide-react";

export const DocsSecurityInfo = () => {
  return (
    <section className="rounded-4xl bg-emerald-50 p-8 sm:p-14 space-y-8 border-2 border-emerald-200 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-100/50">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm ring-2 ring-emerald-200 transition-transform duration-500 hover:rotate-12">
        <ShieldCheck size={32} className="text-emerald-500" />
      </div>
      <div className="space-y-4">
        <p className="font-heading text-2xl font-bold uppercase tracking-tight text-emerald-800">
          Security & Privacy
        </p>
        <div className="text-zinc-500 leading-relaxed text-base space-y-1">
          <p>
            Hệ thống hoạt động độc lập với Cloud. Dữ liệu chỉ được đồng bộ hóa
            thông qua lệnh{" "}
            <span className="text-emerald-800 font-bold underline decoration-emerald-200 decoration-2 underline-offset-4">
              &quot;Sync to Archive&quot;
            </span>{" "}
            do chính bạn khởi tạo.
          </p>
          <p>
            Bạn có toàn quyền kiểm soát, xuất hoặc xóa bỏ lộ trình của mình bất
            cứ lúc nào mà không để lại dấu vết trên máy chủ.
          </p>
        </div>
      </div>
    </section>
  );
};

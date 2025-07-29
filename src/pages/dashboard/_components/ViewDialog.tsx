import dayjs from "dayjs";
import { Dialog } from "../../../components/ui/Dialog";

interface User {
  _id: string;
  name: string;
  firstName: string;
  lastName: string;
  gender: "male" | "female";
  date_of_birth: string;
  email: string;
  photo: Blob;
  phone: string;
  address: string;
}

export default function ViewDialog({
  data,
  open,
  onClose,
  handleOpenEdit,
}: {
  data: User | undefined;
  open: boolean;
  onClose: () => void;
  handleOpenEdit: (data: User) => void;
}) {
  return (
    <>
      {open && (
        <Dialog title="Lihat User" open={open} onClose={() => onClose()}>
          {/* body */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="font-bold text-sm text-center text-black">Foto Profil</p>
              <div className="w-28 h-28 rounded-full">
                <img
                  src={`data:image/png;base64,${data?.photo}`}
                  alt=""
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-5">
              <div className="flex flex-col gap-4">
                <p className="font-bold text-sm text-black">Nama Depan</p>
                <p className="text-sm capitalize text-black">{data?.firstName}</p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-bold text-sm text-black">Nama Belakang</p>
                <p className="text-sm capitalize text-black">{data?.lastName}</p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-bold text-sm text-black">Jenis Kelamin</p>
                <p className="text-sm capitalize text-black">{data?.gender}</p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-bold text-sm text-black">Tanggal Lahir</p>
                <p className="text-sm capitalize text-black">{dayjs(data?.date_of_birth).format("DD MMMM YYYY")}</p>
              </div>
              <div className="flex flex-col gap-4 col-span-2">
                <p className="font-bold text-sm text-black">Email</p>
                <p className="text-sm capitalize text-black">{data?.email}</p>
              </div>
              <div className="flex flex-col gap-4 col-span-2">
                <p className="font-bold text-sm text-black">No. Handphone</p>
                <p className="text-sm capitalize text-black">{data?.phone}</p>
              </div>
              <div className="flex flex-col gap-4 col-span-2">
                <p className="font-bold text-sm text-black">Alamat</p>
                <p className="text-sm capitalize text-black">{data?.address}</p>
              </div>
            </div>

            {/* footer */}
            <button
              type="submit"
              className="btn"
              onClick={() => {
                onClose();
                handleOpenEdit(data as User);
              }}
            >
              Edit
            </button>
          </div>
        </Dialog>
      )}
    </>
  );
}

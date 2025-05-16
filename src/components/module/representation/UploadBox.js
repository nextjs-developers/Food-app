import { HiOutlineFolderAdd } from "react-icons/hi";

export default function UploadBox({ onFilesSelected }) {
  const handleChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length > 0) {
      onFilesSelected(selectedFiles);
    }
  };

  return (
    <label
      htmlFor="upload"
      className="flex flex-col items-center justify-center border-2 border-[#CBCBCB] rounded-sm w-[580px] h-[192px] cursor-pointer hover:border-[#417F56] transition-all"
    >
      <div className="text-6xl text-[#717171]">
        <HiOutlineFolderAdd />
      </div>
      <span className="text-sm text-gray-500">Upload your Images</span>
      <input
        id="upload"
        type="file"
        multiple
        accept="image/*"
        className="hidden"
        onChange={handleChange}
      />
       
    </label>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export const uploadImageToCloudinary = async (file: any) => {
    const formData = new FormData();
    
    formData.append("file", file);
    
    formData.append("cloud_name", `dzyox93jr`);
    formData.append("upload_preset", `ml_default`);

    const res = await fetch(`https://api.cloudinary.com/v1_1/dzyox93jr/image/upload`, { method: "POST", body: formData });
    const data = await res.json();
    return data?.url;
  };
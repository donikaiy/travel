import * as React from "react";
import { UploadCloud, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type ImageUploaderProps = {
    initialImage?: DisplayableGalleryItem;
    onImageChange: (file: File | null) => void;
};

export type DisplayableGalleryItem = {
    id: string;
    previewUrl: string;
    isNew?: boolean;
    file?: File;
};

const ImageUploader: React.FC<ImageUploaderProps> = ({ initialImage, onImageChange }) => {
    const fileInputRef = React.useRef<HTMLInputElement>(null);
    const [image, setImage] = React.useState<DisplayableGalleryItem | null>(initialImage ?? null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            const previewUrl = URL.createObjectURL(file);

            const newImage: DisplayableGalleryItem = {
                id: crypto.randomUUID(),
                previewUrl,
                isNew: true,
                file,
            };

            setImage(newImage);
            onImageChange(file);

            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
        }
    };

    const handleRemove = () => {
        setImage(null);
        onImageChange(null);
    };

    return (
        <div className="w-full flex items-center gap-2">
            <Button
                type="button"
                variant="outline"
                className="size-24 flex flex-col items-center justify-center gap-1 text-muted-foreground hover:text-primary shrink-0"
                onClick={() => fileInputRef.current?.click()}
            >
                <UploadCloud size={32} className="text-gray-800" />
                <span className="text-xs font-medium font-[Figtree] text-gray-800">Upload</span>
            </Button>

            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept="image/*"
            />

            {image && (
                <div className="relative group size-24 overflow-hidden rounded-md shrink-0">
                    <img
                        src={image.previewUrl}
                        alt="Preview"
                        className="size-full object-cover"
                    />
                    <Button
                        variant="destructive"
                        size="icon"
                        className="absolute top-1 right-1 size-6 opacity-0 group-hover:opacity-100 transition-opacity z-10"
                        onClick={handleRemove}
                    >
                        <X size={14} />
                    </Button>
                </div>
            )}
        </div>
    );
};

export default ImageUploader;

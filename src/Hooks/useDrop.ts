import { DragEvent, useState } from "react";

interface DropProps {
  captureFile: (file: File[]) => void;
  onCustomDrop?: (e: DragEvent<HTMLDivElement>) => void;
  acceptedType?: string;
}

export function useDrop({
  captureFile,
  onCustomDrop,
  acceptedType,
}: DropProps) {
  const [dragging, setDragging] = useState(false);

  const ParentProps = () => {
    return {
      onDragEnter: (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragging(true);
      },
      onDragLeave: (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragging(false);
      },
      onDragOver: (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
      },
      onDrop: (e: DragEvent<HTMLDivElement>) => {
        {
          if (onCustomDrop) {
            onCustomDrop(e);
          } else {
            e.preventDefault();
            setDragging(false);
          }

          const file = e.dataTransfer.files;
          if (file.length > 0) {
            const files = Array.from(file);
            files.forEach((file) => {
              if (acceptedType && file.type !== acceptedType) {
                return;
              }
            });

            captureFile(files);
          }
        }
      },
    };
  };

  return {
    dragging,
    ParentProps,
  };
}

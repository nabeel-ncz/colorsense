interface ColorPreviewProps {
  color: string;
}

const ColorPreview = ({ color }: ColorPreviewProps) => {
  return (
    <div className="aspect-square rounded-lg overflow-hidden">
      <div 
        className="w-full h-full"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}

export default ColorPreview;
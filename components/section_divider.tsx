export function SectionDivider() {
  return (
    <div className="relative w-full flex items-center justify-center py-8">
      {/* Bolder divider line */}
      <div 
        className="w-full max-w-5xl h-0.5"
        style={{
          background: 'rgba(2, 103, 115, 0.5)'
        }}
      />
    </div>
  );
}


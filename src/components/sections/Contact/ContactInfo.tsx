export default function ContactInfo() {
  const labelStyle = {
    fontFamily: 'var(--font-instrument), Georgia, serif',
    fontStyle: 'italic' as const,
    fontWeight: 400,
    fontSize: '1.25rem',
    color: 'rgba(255, 255, 255, 0.9)'
  };

  return (
    <div className="space-y-6 text-left">
      <div>
        <h3 style={labelStyle} className="mb-1">Email</h3>
        <p className="text-white/60 text-lg">bodarnifurqan07@gmail.com</p>
      </div>
      <div>
        <h3 style={labelStyle} className="mb-1">Phone</h3>
        <p className="text-white/60 text-lg">+91 9743967986</p>
      </div>
      <div>
        <h3 style={labelStyle} className="mb-1">Location</h3>
        <p className="text-white/60 text-lg">Udupi, Karnataka, India</p>
      </div>
    </div>
  );
}

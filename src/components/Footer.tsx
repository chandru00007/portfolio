const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-sm text-muted-foreground">
          © {currentYear} Chandrashekhar Kawadimatti. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

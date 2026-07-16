

function Footer() {
  return (
    <footer className="border-t bg-background  px-17">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 py-6 md:flex-row">
        <div>
          <h2 className="text-xl font-semibold">Products</h2>
          <p className="text-sm text-muted-foreground">
            Discover the best products with us.
          </p>
        </div>

        <p className="text-sm text-muted-foreground">© 2025 Products</p>
      </div>
    </footer>
  );
}

export default Footer;

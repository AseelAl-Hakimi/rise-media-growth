import { Instagram } from "lucide-react";

const posts = [
  { id: 1, image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&h=300&fit=crop" },
  { id: 2, image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=300&h=300&fit=crop" },
  { id: 3, image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=300&h=300&fit=crop" },
  { id: 4, image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=300&h=300&fit=crop" },
  { id: 5, image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=300&fit=crop" },
  { id: 6, image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=300&h=300&fit=crop" },
];

const InstagramFeed = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <Instagram size={24} />
            <span className="font-medium">@risemediatv</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Follow Us on <span className="text-gradient">Instagram</span>
          </h2>
        </div>

        {/* Feed Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {posts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com/risemediatv"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <img
                src={post.image}
                alt="Instagram post"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
                <Instagram
                  className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  size={32}
                />
              </div>
            </a>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="text-center mt-8">
          <a
            href="https://instagram.com/risemediatv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span>View more on Instagram</span>
            <Instagram size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
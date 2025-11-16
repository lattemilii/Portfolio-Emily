import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  images?: string[];
  tags?: string[];
}

const ProjectCard = ({ title, description, images = [], tags = [] }: ProjectCardProps) => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition bg-accent/10 rounded-xl hover:scale-[1.02]">
      {/*Image*/}
      <div className="relative w-full h-auto bg-muted/30 overflow-hidden">
        {images.length > 0 ? (
          <>
            <img
              src={images[index]}
              alt=""
              className="w-full h-auto object-contain transition-transform duration-300"
            />

            {images.length > 1 && (
              <>
                {/*Buttons*/}
                <button
                  onClick={(e) => { e.preventDefault(); prev(); }}
                  className="absolute top-1/2 left-2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-opacity opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={(e) => { e.preventDefault(); next(); }}
                  className="absolute top-1/2 right-2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-opacity opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/*Counter*/}
                <div className="absolute top-3 right-3 bg-accent/50 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                  {index + 1} / {images.length}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            No Images
          </div>
        )}
      </div>

      {/*Text Section*/}
      <CardHeader className="pt-4">
        <CardTitle className="text-xl text-primary">{title}</CardTitle>
        <CardDescription className="text-secondary">{description}</CardDescription>
      </CardHeader>

      {/*Tags*/}
      {tags.length > 0 && (
        <CardContent className="pt-2">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <Badge key={i} variant="secondary" className="text-tags-text">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default ProjectCard;

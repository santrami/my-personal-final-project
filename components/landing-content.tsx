"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  {
    name: "Santiago Ramirez",
    title: "CEO",
    company: "Heraclitus",
    quote:
      "Has been a wonderful experience working with this team. They are very professional and always on time. I would recommend them to anyone.",
      description: "Best app ever",
      avatar: "A"
  },
  {
    name: "John Doe",
    title: "CEO",
    company: "Acme Inc.",
    quote:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam faucibus, nibh nisl ultricies nunc, quis aliquam nisl nunc eu nisi. Sed euismod, diam quis aliquam faucibus, nibh nisl ultricies nunc, quis aliquam nisl nunc eu nisi.",
      description: "Best app ever",
      avatar: "A"
  },
  {
    name: "John Doe",
    title: "CEO",
    company: "Acme Inc.",
    quote:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam faucibus, nibh nisl ultricies nunc, quis aliquam nisl nunc eu nisi. Sed euismod, diam quis aliquam faucibus, nibh nisl ultricies nunc, quis aliquam nisl nunc eu nisi.",
      description: "Best app ever",
      avatar: "A"
  },
  {
    name: "John Doe",
    title: "CEO",
    company: "Acme Inc.",
    quote:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam faucibus, nibh nisl ultricies nunc, quis aliquam nisl nunc eu nisi. Sed euismod, diam quis aliquam faucibus, nibh nisl ultricies nunc, quis aliquam nisl nunc eu nisi.",
      description: "Best app ever",
      avatar: "A"
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grids-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((testimonial) => (
            <Card key={testimonial.description} className="bg-[#192339] border-none text-white">
                <CardHeader>
                    <CardTitle className="flex items-center gap-x-2">
                        <div>
                            <p className="text-lg">{testimonial.name}</p>
                            <p className="text-zinc-400 text-sm">{testimonial.title}</p>
                        </div>
                    </CardTitle>
                    <CardContent className="pt-4 px-0">
                        {testimonial.description}
                    </CardContent>
                </CardHeader>
                    
            </Card>
        ))}
      </div>
    </div>
  );
};

import { Card, CardContent, CardHeader } from "../ui/card";

const Category = () => {
  const categoryList = [
    {
      banner:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      name: "Music",
    },
    {
      banner:
        "https://images.pexels.com/photos/164879/pexels-photo-164879.jpeg",
      name: "Sport",
    },
    {
      banner:
        "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg",
      name: "Art",
    },
    {
      banner:
        "https://images.pexels.com/photos/8856048/pexels-photo-8856048.jpeg",
      name: "Food",
    },
    {
      banner:
        "https://images.pexels.com/photos/167964/pexels-photo-167964.jpeg",
      name: "Travel",
    },
    {
      banner:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      name: "Music",
    },
    {
      banner:
        "https://images.pexels.com/photos/164879/pexels-photo-164879.jpeg",
      name: "Sport",
    },
    {
      banner:
        "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg",
      name: "Art",
    },
    {
      banner:
        "https://images.pexels.com/photos/8856048/pexels-photo-8856048.jpeg",
      name: "Food",
    },
    {
      banner:
        "https://images.pexels.com/photos/167964/pexels-photo-167964.jpeg",
      name: "Travel",
    },
  ];

  return (
    <div>
      <Card>
        <CardHeader className="text-xl font-bold">Category</CardHeader>
        <CardContent>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide h-40">
            {categoryList.map((value, index) => (
              <div
                key={index}
                className="relative min-w-[8rem] h-32 rounded-lg overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-transform"
              >
                {/* Background */}
                <div
                  className="w-full h-full bg-cover bg-center flex items-center justify-center"
                  style={{
                    backgroundImage: `url(${value.banner})`,
                  }}
                >
                  {/* Overlay + Text */}
                  <div className="absolute inset-0 bg-black/40" />
                  <p className="relative text-white font-semibold text-lg">
                    {value.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div></div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Category;

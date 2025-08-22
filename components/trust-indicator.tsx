import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export function TrustIndicator() {
  const avatars = [
    {
      src: "https://gravatar.com/avatar/1ffbd2db50ffedf3bdc1f8366b395492?s=400&d=robohash&r=x",
      alt: "User 1",
    },
    {
      src: "https://gravatar.com/avatar/53445a25320709605e7eb04d19d0882b?s=400&d=robohash&r=x",
      alt: "User 2",
    },
    {
      src: "https://gravatar.com/avatar/fa032dea7d31d816b9fb7d252fd4e207?s=400&d=robohash&r=x",
      alt: "User 3",
    },
    {
      src: "https://gravatar.com/avatar/4d760034688f00ffc2959e3e7cd4f0e2?s=400&d=robohash&r=x",
      alt: "User 4",
    },
    {
      src: "https://gravatar.com/avatar/628450289dee61f8e4a2075fc88ca844?s=400&d=robohash&r=x",
      alt: "User 5",
    },
    {
      src: "https://gravatar.com/avatar/8d4d914daabdec841f6abe702ccc7403?s=400&d=robohash&r=x",
      alt: "User 6",
    },
  ];

  return (
    <div className="space-y-6 pt-4">
      <div className="flex items-center gap-4 py-3 rounded-full">
        {/* Avatar Stack */}
        <div className="flex -space-x-2">
          {avatars.map((avatar, index) => (
            <Avatar
              key={index}
              className="w-10 h-10 bg-white border-2 border-teal-900"
            >
              <AvatarImage src={avatar.src || "/hero.png"} alt={avatar.alt} />
              <AvatarFallback className="bg-teal-600 text-white text-sm">
                {avatar.alt.split(" ")[1]}
              </AvatarFallback>
            </Avatar>
          ))}
        </div>

        {/* Stars */}
        <div className="flex gap-1">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className="w-5 h-5 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>
        <span className="text-teal-100 font-medium text-sm whitespace-nowrap">
          Trusted By <span className="font-bold text-white">2000+</span>{" "}
          Creators
        </span>
      </div>

      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="text-sm text-teal-200">Verified Platform</span>
        </div>

        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="text-sm text-teal-200">Secure & Private</span>
        </div>

        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-sm text-teal-200">Māori-Led</span>
        </div>
      </div>
    </div>
  );
}

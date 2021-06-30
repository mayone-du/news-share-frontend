export const NewsLoading: React.VFC = () => {
  return (
    <ul className="w-full border-b">
      <li className="flex items-center w-full border-t">
        {/* image */}
        <div className="w-20 h-20 bg-gray-100 animate-pulse"></div>
        {/* content */}
        <div className="mx-auto w-5/6">
          {/* title */}
          <div className="w-full h-4 bg-gray-100 animate-pulse"></div>
          {/* summary */}
          <div className="my-1 w-full h-2 bg-gray-100 animate-pulse"></div>
          <div className="my-1 w-full h-2 bg-gray-100 animate-pulse"></div>
          {/* createdAt contributorName */}
          <div className="flex justify-between items-center">
            <div className="my-1 w-24 h-2 bg-gray-100 animate-pulse"></div>
            <div className="my-1 w-10 h-2 bg-gray-100 animate-pulse"></div>
          </div>
        </div>
      </li>

      <li className="flex items-center w-full border-t">
        {/* image */}
        <div className="w-20 h-20 bg-gray-100 animate-pulse"></div>
        {/* content */}
        <div className="mx-auto w-5/6">
          {/* title */}
          <div className="w-full h-4 bg-gray-100 animate-pulse"></div>
          {/* summary */}
          <div className="my-1 w-full h-2 bg-gray-100 animate-pulse"></div>
          <div className="my-1 w-full h-2 bg-gray-100 animate-pulse"></div>
          {/* createdAt contributorName */}
          <div className="flex justify-between items-center">
            <div className="my-1 w-24 h-2 bg-gray-100 animate-pulse"></div>
            <div className="my-1 w-10 h-2 bg-gray-100 animate-pulse"></div>
          </div>
        </div>
      </li>
    </ul>
  );
};

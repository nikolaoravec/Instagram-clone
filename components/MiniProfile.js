function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src="https://wi.wallpapertip.com/wsimgs/41-414903_venom-facebook-profile.jpg"
        alt="Mini Profile picture"
        className="w-16 h-16 rounded-full border p-[2px] cursor-pointer"
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">nikolaoravec</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram Clone</h3>
      </div>

      <button className="text-blue-400 text-sm font-semibold">Sign out</button>
    </div>
  );
}

export default MiniProfile;

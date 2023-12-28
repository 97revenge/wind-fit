export default function MobileDeviceElement() {
  return (
    <>
      <div className="p-4">
        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl">
          <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg shadow-2xl"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg shadow-2xl"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg shadow-2xl"></div>
          <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg shadow-2xl"></div>
          <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800 shadow-2xl">
            <img
              src="https://github-production-user-asset-6210df.s3.amazonaws.com/80254945/293116830-b51f1fa0-563d-4c3e-bc09-53a3c83e0dd2.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20231228%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231228T005615Z&X-Amz-Expires=300&X-Amz-Signature=90490dc6f98306e15b2d5b62ba7cc57117a88a46a35a6b96372d69c001a6bca4&X-Amz-SignedHeaders=host&actor_id=80254945&key_id=0&repo_id=724829546"
              className="dark:hidden w-[272px] h-[572px]"
              alt=""
            />
            <img
              src="https://github.com/97revenge/valorant-app/assets/80254945/af5b6827-a4c9-453e-b5df-39c898438dbc"
              className="hidden dark:block w-[272px] h-[572px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

'use client';

import Button from "./Button";
import GroupRegisterButton from "./Button/GroupRegisterButton";
export default function NavBar() {
  return (
    <div className="w-full h-navbarHeight shadow-navbar px-[15px] pb-[6.5px] pt-[2.5px] flex lg:gap-9 gap-1 justify-center items-center fixed bottom-0 z-20 bg-[#F2F2F2]">
      <div className = 'flex lg:gap-10 gap-2'>
      <Button link = '/home' name = '홈'/>
      <Button link = '/ranking' name = '랭킹'/>
      </div>
      <GroupRegisterButton />
      <div className = 'flex lg:gap-10 gap-2'>
      <Button link = '/message' name = '채팅'/>
      <Button link = '/group/history' name = '그룹'/>
      </div>
    </div>
  );
}

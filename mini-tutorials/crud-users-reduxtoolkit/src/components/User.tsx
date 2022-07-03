import React from 'react'
import { TUser } from '../type';

interface IProps {
    user: TUser
}

export const User = ({ user }: IProps) => {
    return (
        <>
            <div className="relative p-4">
                <div className="w-[19.875rem] rounded-lg bg-white text-[0.8125rem] leading-5 text-slate-900 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
                    <div className="flex items-center p-4 pb-0">
                        <div className="ml-4 flex-auto"><div className="font-medium">Emily Selman</div>
                            <div className="mt-1 text-slate-500">Sent you an invite to connect.</div></div></div>
                    <div className="flex gap-3 p-4">
                        <div className="pointer-events-auto rounded-md bg-indigo-600 py-2 px-3 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500">Accept
                        </div>
                        <div className="pointer-events-auto rounded-md py-2 px-4 text-center font-medium shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50">
                            Decline</div></div></div>
                            <div className="z-0">
                                <div className="absolute -right-4 -left-12 bottom-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                                <div className="absolute left-[21.875rem] -bottom-16 -top-2 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]">
                        </div></div>
            </div>
        </>
    )
}

export default User;

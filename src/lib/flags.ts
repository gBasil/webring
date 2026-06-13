import type { MemberFlags } from './members';

export function hasFlag(flags: number, flag: MemberFlags): boolean {
	return (flags & flag) > 0;
}

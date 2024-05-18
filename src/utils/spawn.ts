import spawn from 'cross-spawn';

export const spawnSync = (
  command: string,
  args: string[] = [],
  opts: any = {},
) => {
  return spawn(command, args, {
    ...opts,
  });
};

import { Plugin } from "@vident/types/lib/Plugin";

export default class VidentCore {

  private readonly plugins: Plugin[];

  constructor(plugins: Plugin[]) {
    this.plugins = plugins;
  }

  private initPlugins(): void {

  }
}

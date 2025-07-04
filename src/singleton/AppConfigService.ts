export class AppConfigService {
  private static instance: AppConfigService;

  private constructor(
    public readonly companyName: string,
    public readonly footer: string
  ) {}

  public static getInstance(companyName?: string, footer?: string): AppConfigService {
    if (!AppConfigService.instance) {
      if (!companyName || !footer) {
        throw new Error("AppConfigService must be initialized with companyName and footer on first access.");
      }
      AppConfigService.instance = new AppConfigService(companyName, footer);
    }
    return AppConfigService.instance;
  }
}
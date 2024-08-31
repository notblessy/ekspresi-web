import { HeaderNavigation } from "@/components/HeaderNavigation";

const LandingLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <HeaderNavigation />
      {children}
    </div>
  );
};

export default LandingLayout;

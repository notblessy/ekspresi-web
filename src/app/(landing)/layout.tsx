import { HeaderNavigation } from "@/components/HeaderNavigation";

const LandingLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div style={{ background: "#000" }}>
        <div className="container w-[970px] mx-auto py-3">
          <HeaderNavigation />
        </div>
      </div>
      {children}
    </div>
  );
};

export default LandingLayout;

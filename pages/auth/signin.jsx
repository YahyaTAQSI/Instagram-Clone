import { getProviders, signIn as SingInToProvider } from "next-auth/react";
import Header from "../../components/Header";
// run in browser
export default function singIn({ providers }) {
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen items-center justify-center py-2 -mt-24 px-14  text-center">
        <img className="w-80" src="https://links.papareact.com/ocw" alt="" />

        <p className="font-xs italic">
          This is not the REAL app, it's just a test
        </p>

        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 rounded-lg text-white"
                onClick={() =>
                  SingInToProvider(provider.id, { callbackUrl: "/" })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// rur in server
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}

import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <div>
        <Link className="link" href="/" passHref legacyBehavior>
          <span className={router.pathname === "/" ? "active" : ""}>Home</span>
        </Link>
        <Link href="/about" passHref legacyBehavior>
          <span className={router.pathname === "/about" ? "active" : ""}>
            About
          </span>
        </Link>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        nav span {
          font-weight: 600;
          font-size: 18px;
        }

        nav div.link {
        }
        nav div {
          display: flex;
          gap: 10px;
        }
        .active {
          color: tomato;
        }
      `}</style>
    </nav>
  );
}

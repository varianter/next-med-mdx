import Link from 'next/link';

export const MdxLink = ({ children, to }) =>
    <Link href={to}>
        <a>{children}</a>
    </Link>
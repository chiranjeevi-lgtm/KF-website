import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <nav className="blog-pagination" aria-label="Blog pagination">
      <div className="blog-pagination__links">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
          if (page === currentPage) {
            return (
              <span
                key={page}
                aria-label={`Page ${page}`}
                aria-current="page"
                className="blog-pagination__number blog-pagination__number--active"
              >
                {page}
              </span>
            );
          }
          return (
            <Link
              key={page}
              href={page === 1 ? "/blog" : `/blog?page=${page}`}
              aria-label={`Page ${page}`}
              className="blog-pagination__number"
            >
              {page}
            </Link>
          );
        })}

        {currentPage < totalPages && (
          <Link
            href={`/blog?page=${currentPage + 1}`}
            className="blog-pagination__number blog-pagination__next"
            aria-label="Next page"
          >
            &gt;
          </Link>
        )}
      </div>
    </nav>
  );
}

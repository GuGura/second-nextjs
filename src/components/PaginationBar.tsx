interface PaginationBarProps {
  currentPage: number;
  totalPages: number;
}
export default function PaginationBar({currentPage,totalPages}:PaginationBarProps){
  const maxPage = Math.min(totalPages, Math.max(currentPage + 4 , 10))
  const minPage = Math.max(1, Math.min(currentPage - 4, totalPages - 9))
}
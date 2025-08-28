
import { DeleteConfirmationDialogue } from "@/components/DeleteConfirmationDialogue";
import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AddTourTypeModal } from "@/modules/Admin/Tour/AddTourTypeModal";
import { useGetTourTypesQuery, useRemoveTourTypeMutation } from "@/redux/features/tour/tour.api";

import { Trash2 } from "lucide-react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useState } from "react";

export default function AddTourType() {


  const [currentPage, setCurrentPage] = useState(1)
  const { data } = useGetTourTypesQuery({page : currentPage});
  const [removeTourType] = useRemoveTourTypeMutation();

  const totalPage = data?.meta?.totalPage;

  const handleRemoveTourType = async(tourId : string) => {
    try {
        const res = await removeTourType(tourId).unwrap;
        console.log(res);
    
    }
    catch(err){
      console.log(err)
    }
  }


  return (
    <div className="w-full max-w-7xl mx-auto px-5">
      <div className="flex justify-between my-8">
        <h1 className="text-xl font-semibold">Tour Types</h1>
        <AddTourTypeModal/>
      </div>
      <div className="border border-muted rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.data?.map((item: { _id  : string, name: string }) => (
              <TableRow>
                <TableCell className="font-medium w-full">
                  {item?.name}
                </TableCell>
                <TableCell>
                  <DeleteConfirmationDialogue onConfirm={() => handleRemoveTourType(item._id)}>
                    <Button size="sm">
                    <Trash2 />
                  </Button></DeleteConfirmationDialogue>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-end">

              <div>
                 <Pagination>
                                <PaginationContent>
                                  <PaginationItem>
                                    <PaginationPrevious className ={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"} 
                                    onClick={() => setCurrentPage((prev) =>prev - 1)} />
                                  </PaginationItem>
                                  {
                                    Array.from({ length: totalPage }, (_, i) => i + 1).map((page) => (
                                      <PaginationItem key={page}>
                                        <PaginationLink isActive={currentPage === page} onClick={() => setCurrentPage(page)}>
                                          {page}
                                        </PaginationLink>
                                      </PaginationItem>
                                    ))
                                  }
                                  <PaginationItem>
                                    <PaginationEllipsis />
                                  </PaginationItem>
                                  <PaginationItem>
                                    <PaginationNext className ={currentPage === totalPage ? "pointer-events-none opacity-50" : "cursor-pointer"} 
                                     onClick={() => setCurrentPage((prev) =>prev + 1)} />
                                  </PaginationItem>
                                </PaginationContent>
                </Pagination>
              </div>
      </div>
    </div>
  );
}
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const SizeChartHoddies = () => {
  return (
    <div className="">
      <h1 className="text-center mb-4">HOODIES</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className=" border p-6"></TableHead>
            <TableHead className=" border p-6">Length (inches)</TableHead>
            <TableHead className=" border p-6">Chest (inches)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium border p-6">SMALL(S)</TableCell>
            <TableCell className=" border p-6">26</TableCell>
            <TableCell className=" border p-6">50 </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium border p-6">MEDIUM(M)</TableCell>
            <TableCell className=" border p-6">26.5</TableCell>
            <TableCell className=" border p-6">52 </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium border p-6">LARGLE(L)</TableCell>
            <TableCell className=" border p-6">27</TableCell>
            <TableCell className=" border p-6">54 </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium border p-6">
              EXTRA LARGE(XL)
            </TableCell>
            <TableCell className=" border p-6">27.5</TableCell>
            <TableCell className=" border p-6">56 </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium border p-6">
              DOUBLE LARGE(XXL)
            </TableCell>
            <TableCell className=" border p-6">28</TableCell>
            <TableCell className=" border p-6">58 </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
const SizeChartShirt = () => {
  return (
    <div className="mt-4">
      <h1 className="text-center mb-4">TSHIRT</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className=" border p-6"></TableHead>
            <TableHead className=" border p-6">Length (inches)</TableHead>
            <TableHead className=" border p-6">Chest (inches)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium border p-6">SMALL(S)</TableCell>
            <TableCell className=" border p-6">28</TableCell>
            <TableCell className=" border p-6">44 </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium border p-6">MEDIUM(M)</TableCell>
            <TableCell className=" border p-6">28</TableCell>
            <TableCell className=" border p-6">46 </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium border p-6">LARGLE(L)</TableCell>
            <TableCell className=" border p-6">29</TableCell>
            <TableCell className=" border p-6">48 </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium border p-6">
              EXTRA LARGE(XL)
            </TableCell>
            <TableCell className=" border p-6">30</TableCell>
            <TableCell className=" border p-6">50 </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium border p-6">
              DOUBLE LARGE(XXL)
            </TableCell>
            <TableCell className=" border p-6">31</TableCell>
            <TableCell className=" border p-6">52 </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
export default SizeChartShirt;

export const SizeChartShort = () => {
  return (
    <div className="mt-4">
      <h1 className="text-center mb-4">SHORTs</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className=" border p-6"></TableHead>
            <TableHead className=" border p-6">Waist</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium border p-6">SMALL(S)</TableCell>
            <TableCell className=" border p-6">30 </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium border p-6">MEDIUM(M)</TableCell>
            <TableCell className=" border p-6">32 </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium border p-6">LARGLE(L)</TableCell>
            <TableCell className=" border p-6">34 </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium border p-6">
              EXTRA LARGE(XL)
            </TableCell>
            <TableCell className=" border p-6">36 </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium border p-6">
              DOUBLE LARGE(XXL)
            </TableCell>
            <TableCell className=" border p-6">38 </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

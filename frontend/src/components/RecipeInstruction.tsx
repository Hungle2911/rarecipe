interface InstructionsProps {
  instructions: string;
}
const Instructions = ({ instructions }: InstructionsProps) => (
  <div className="mb-6">
    <h5 className="text-xl font-semibold mb-2">Preparation Instructions</h5>
    <div className="text-gray-700">{instructions}</div>
  </div>
);

export default Instructions;

import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { GithubIcon } from "lucide-react";

export default function GitHubStats() {
  return (
    <section id="github" className="my-20">
      <Card className="bg-white/5 backdrop-blur-xs border border-white/30 shadow-md max-w-5xl mx-auto hover:drop-shadow-[0_0_40px_#194D65] transition-all duration-500">
        <CardHeader className="flex items-center gap-3">
          <GithubIcon className="w-6 h-6 text-primary" />
          <CardTitle className="text-2xl font-semibold">
            GitHub Contributions
          </CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <img
            src={`https://ghchart.rshah.org/38bdf8/aqilkmy`}
            alt="aqilkmy's GitHub contribution chart"
            className="w-full max-w-full h-auto"
          />
        </CardContent>
      </Card>
    </section>
  );
}

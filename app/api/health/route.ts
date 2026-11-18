import { NextResponse } from "next/server";

// Static — never touches the database, so it stays cheap to poll. Render's
// healthCheckPath points here; a separate uptime pinger can hit it too to
// stop the free-tier service from sleeping (see Naplan-Portal/README.md).
export async function GET() {
  return NextResponse.json({ status: "ok" });
}

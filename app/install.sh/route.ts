
export async function GET() {
  const res = await fetch('https://github.com/dboxed/dboxed/releases/latest/download/install.sh', {})

  if (!res.ok) {
    return new Response(res.body, {
      status: res.status,
    })
  }

  const data = await res.bytes()

  return new Response(data, {
    headers: {
      "Content-Type": "application/octet-stream",
      "Content-Length": "" + data.length,
    }
  })
}

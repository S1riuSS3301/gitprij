"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, MoreVertical, Ban, Shield, Trash2 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

import { useEffect, useState } from "react"

type Row = { id: string; name: string | null; email: string; role: string; joined: string }

export function UsersTable() {
  const [rows, setRows] = useState<Row[]>([])
  const [query, setQuery] = useState("")

  const fetchUsers = async () => {
    const res = await fetch("/api/admin/users")
    if (!res.ok) return
    const data = await res.json()
    const mapped: Row[] = data.map((u: any) => ({
      id: u.id,
      name: u.name ?? null,
      email: u.email,
      role: (u.role || "user").toLowerCase(),
      joined: new Date(u.createdAt).toLocaleDateString(),
    }))
    setRows(mapped)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const filtered = rows.filter((r) => {
    const q = query.toLowerCase()
    return r.email.toLowerCase().includes(q) || (r.name || "").toLowerCase().includes(q)
  })

  const changeRole = async (userId: string, role: string) => {
    const res = await fetch("/api/admin/users", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, role }),
    })
    if (res.ok) fetchUsers()
  }

  const deleteUser = async (userId: string) => {
    const res = await fetch(`/api/admin/users?userId=${userId}`, { method: "DELETE" })
    if (res.ok) fetchUsers()
  }

  return (
    <div className="card-gradient rounded-xl p-6 border border-border/50">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Поиск пользователей..." className="pl-10 bg-background/50 border-border/50" />
        </div>
        <Button className="bg-primary hover:bg-primary/90" onClick={fetchUsers}>Обновить</Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border/50">
              <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">ID</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Пользователь</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Роль</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Дата регистрации</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Действия</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((user) => (
              <tr key={user.id} className="border-b border-border/30 hover:bg-background/30 transition-colors">
                <td className="py-4 px-4 text-sm text-muted-foreground">{user.id}</td>
                <td className="py-4 px-4">
                  <div>
                    <p className="text-sm font-medium text-foreground">{user.name || "—"}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <Badge variant={user.role === "admin" ? "default" : "secondary"}>{user.role}</Badge>
                </td>
                <td className="py-4 px-4 text-sm text-muted-foreground">{user.joined}</td>
                <td className="py-4 px-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem className="gap-2" onClick={() => changeRole(user.id, user.role === "admin" ? "user" : "admin")}>
                        <Shield className="w-4 h-4" />
                        {user.role === "admin" ? "Сделать user" : "Сделать admin"}
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2 text-destructive" onClick={() => deleteUser(user.id)}>
                        <Trash2 className="w-4 h-4" />
                        Удалить
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

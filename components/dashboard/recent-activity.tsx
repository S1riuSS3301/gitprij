"use client"

import { Clock } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useEffect, useState } from "react"

interface Activity {
  action: string
  details?: string
  time: string
}

export function RecentActivity() {
  const { t } = useLanguage()
  const [activities, setActivities] = useState<Activity[]>([])

  useEffect(() => {
    const savedActivities = JSON.parse(localStorage.getItem("userActivity") || "[]")
    if (savedActivities.length > 0) {
      setActivities(savedActivities.slice(0, 5))
    } else {
      // Default activities if none exist
      setActivities([
        {
          action: t("activity.login"),
          details: "IP: 192.168.1.50",
          time: `2 ${t("activity.minutesAgo")}`,
        },
      ])
    }
  }, [t])

  return (
    <div className="card-gradient rounded-xl p-6 border border-border/50">
      <h2 className="text-xl font-bold text-foreground mb-6">{t("activity.title")}</h2>

      {activities.length === 0 ? (
        <div className="text-center py-8">
          <Clock className="w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-50" />
          <p className="text-sm text-muted-foreground">{t("activity.noActivity")}</p>
        </div>
      ) : (
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">{activity.action}</p>
                {activity.details && <p className="text-xs text-muted-foreground">{activity.details}</p>}
                <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

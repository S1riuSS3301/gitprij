import { db } from "@/lib/db";
import { getAuthUser } from "@/lib/auth-utils";
import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

// ======== Профиль пользователя ========

export async function GET(req: Request) {
  try {
    const authUser = await getAuthUser();

    if (!authUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Гарантируем, что пользователь и профиль существуют
    let user = await db.user.findUnique({ where: { id: authUser.userId } });
    if (!user) {
      user = await db.user.create({
        data: {
          id: authUser.userId,
          email: authUser.email,
          password: "",
          role: authUser.role || "user",
          name: (authUser as any).name ?? null,
        },
      });
    }

    let profile = await db.profile.findUnique({
      where: { userId: authUser.userId },
    });

    if (!profile) {
      profile = await db.profile.create({
        data: { userId: authUser.userId, balance: 0 },
      });
    }

    // Можно дополнительно подгружать user.email/id сюда
    return NextResponse.json({
      ...profile,
      email: user.email,
      name: user.name,
    });
  } catch (error) {
    console.error("[profile] Error fetching profile:", error);
    return NextResponse.json({ error: "Failed to fetch profile" }, { status: 500 });
  }
}

// ======== Обновление профиля ========

export async function PATCH(request: Request) {
  try {
    const authUser = await getAuthUser();

    if (!authUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();

    // Обновляем профиль
    let profile = await db.profile.findUnique({
      where: { userId: authUser.userId },
    });

    if (!profile) {
      profile = await db.profile.create({
        data: { userId: authUser.userId, ...(body ?? {}) },
      });
    } else {
      profile = await db.profile.update({
        where: { userId: authUser.userId },
        data: body,
      });
    }

    return NextResponse.json(profile);
  } catch (error) {
    console.error("[profile] Error updating profile:", error);
    return NextResponse.json({ error: "Failed to update profile" }, { status: 500 });
  }
}
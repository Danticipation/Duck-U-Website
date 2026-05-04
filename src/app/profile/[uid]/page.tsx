'use client';

import { use, useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { QRCodeSVG } from 'qrcode.react';
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = { apiKey: 'AIzaSyCWGhozVDFASht0KWJc4zGXRemXXcnyo2Q', authDomain: 'duck-u.firebaseapp.com', projectId: 'duck-u', storageBucket: 'duck-u.firebasestorage.app', messagingSenderId: '153710852057', appId: '1:153710852057:web:f3bf228789bd0add158bc8', };

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0]; const db = getFirestore(app);

type PublicProfile = {
  uid: string;
  displayName: string;
  username: string;
  rankTitle: string;
  totalPoints: number;
  bestStreak: number;
  badges: string[];
};

function sanitize(raw: any, uid: string): PublicProfile {
  return {
    uid,
    displayName: raw?.displayName ?? raw?.username ?? 'Ducker',
    username: raw?.username ?? '',
    rankTitle: raw?.rankTitle ?? 'Sitting Duck',
    totalPoints: typeof raw?.totalPoints === 'number' ? raw.totalPoints : 0,
    bestStreak: typeof raw?.bestStreak === 'number' ? raw.bestStreak : 0,
    badges: Array.isArray(raw?.badges) ? raw.badges : [],
  };
}

export default function ProfilePage({ params }: { params: Promise<{ uid: string }> }) {
  const { uid } = use(params);
  const [profile, setProfile] = useState<PublicProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const snap = await getDoc(doc(db, 'users', uid));
        if (cancelled) return;
        if (!snap.exists()) {
          setError('Ducker not found.');
        } else {
          setProfile(sanitize(snap.data(), uid));
        }
      } catch (e) {
        if (cancelled) return;
        setError(e instanceof Error ? e.message : 'Something went wrong.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [uid]);

  const qrValue = `ducku://profile/${uid}`;

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="rounded-3xl bg-neutral-900 shadow-xl px-6 pt-8 pb-6 relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-yellow-300" />
          <div className="text-center px-6 pt-8 pb-4">
            <div className="text-xs tracking-widest text-neutral-400 uppercase mb-1">Duck U</div>
            <h1 className="text-2xl font-black tracking-tight">
              {loading ? 'Loading...' : error ? 'Ducker not found' : profile?.displayName ?? 'Ducker'}
            </h1>
            {profile && (
              <div className="text-sm text-neutral-300 mt-1">{profile.rankTitle}</div>
            )}
          </div>

          {profile && (
            <div className="grid grid-cols-2 gap-3 pb-6">
              <div className="rounded-xl bg-neutral-800 text-center py-4">
                <div className="text-2xl font-bold text-yellow-300">{profile.totalPoints}</div>
                <div className="text-[10px] uppercase tracking-widest text-neutral-400 mt-1">Total points</div>
              </div>
              <div className="rounded-xl bg-neutral-800 text-center py-4">
                <div className="text-2xl font-bold text-yellow-300">{profile.bestStreak}</div>
                <div className="text-[10px] uppercase tracking-widest text-neutral-400 mt-1">Best streak</div>
              </div>
            </div>
          )}

          {profile && profile.badges.length > 0 && (
            <div className="flex flex-wrap gap-2 pb-4 justify-center">
              {profile.badges.map((b) => (
                <span key={b} className="text-xs px-3 py-1 rounded-full bg-yellow-300/10 text-yellow-300 border border-yellow-300/20">{b}</span>
              ))}
            </div>
          )}

          {profile && (
            <div className="bg-neutral-100 rounded-2xl p-4 flex items-center justify-center mb-6">
              <QRCodeSVG value={qrValue} size={240} bgColor="#ffffff" fgColor="#0a0a0a" level="M" />
            </div>
          )}
          <a
            href="/#install"
            className="block w-full bg-yellow-300 hover:bg-yellow-200 text-neutral-950 text-center font-bold py-3 rounded-xl transition"
          >
            Get Duck U
          </a>
          <p className="text-xs text-center text-neutral-500 mt-3">
            Scan this QR from the Duck U app to duck {profile?.displayName ?? 'them'}.
          </p>
        </div>
        <p className="text-center text-neutral-600 text-xs mt-6">
          Duck U · ducku.app
        </p>
      </div>
    </main>
  );
}